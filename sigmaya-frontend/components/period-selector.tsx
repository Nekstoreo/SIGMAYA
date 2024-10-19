import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Period {
  id: string;
  name: string;
}

interface Props {
  periods: Period[];
  selectedPeriod: string | undefined;
  onPeriodChange: (periodId: string) => void;
}

export function PeriodSelector({
  periods,
  selectedPeriod,
  onPeriodChange,
}: Props) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Selecciona un Período</CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={selectedPeriod} onValueChange={onPeriodChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona un período" />
          </SelectTrigger>
          <SelectContent>
            {periods.map((period) => (
              <SelectItem key={period.id} value={period.id}>
                {period.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
