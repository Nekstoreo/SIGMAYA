import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Evaluation {
  id: number;
  name: string;
  weight: number;
  grade: number | null;
}

interface Props {
  initialEvaluations: Evaluation[];
}

export function GradeCalculator({ initialEvaluations }: Props) {
  const [evaluations, setEvaluations] = useState<Evaluation[]>(initialEvaluations);

  const [finalGrade, setFinalGrade] = useState<number | null>(null);
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    setEvaluations(initialEvaluations);
  }, [initialEvaluations]);

  const handleGradeChange = (id: number, grade: number | null) => {
    setEvaluations(evaluations.map(evaluation => 
      evaluation.id === id ? { ...evaluation, grade } : evaluation
    ));
  };

  const calculateFinalGrade = () => {
    let totalWeight = 0;
    let weightedSum = 0;

    evaluations.forEach(evaluation => {
      if (evaluation.grade !== null) {
        weightedSum += evaluation.grade * (evaluation.weight / 100);
        totalWeight += evaluation.weight;
      }
    });

    const finalGrade = weightedSum / (totalWeight / 100);
    setFinalGrade(finalGrade);

    if (finalGrade >= 3.0) {
      setStatus('Aprobado');
    } else {
      setStatus('No Aprobado');
    }
  };

  return (
    <Card className="mb-6 w-full lg:w-1/4">
      <CardHeader>
        <CardTitle>Calculadora de Notas</CardTitle>
      </CardHeader>
      <CardContent>
        {evaluations.map(evaluation => (
          <div key={evaluation.id} className="mb-4 flex items-center">
            <label className="block mb-2 w-1/2">{evaluation.name} ({evaluation.weight}%):</label>
            <Input 
              type="number" 
              step="0.01" 
              min="0" 
              max="5" 
              value={evaluation.grade !== null ? evaluation.grade : ''} 
              onChange={(e) => handleGradeChange(evaluation.id, parseFloat(e.target.value) || null)} 
              className="w-1/2"
            />
          </div>
        ))}
        <Button onClick={calculateFinalGrade} className="w-full mb-4">Calcular Nota Final</Button>
        {finalGrade !== null && (
          <div>
            <p className="text-lg">Nota Final: {finalGrade.toFixed(2)}</p>
            <p className={`text-lg ${status === 'Aprobado' ? 'text-green-600' : 'text-red-600'}`}>{status}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}