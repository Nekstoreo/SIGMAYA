import { TabsContent } from '@/components/ui/tabs'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface StudentTabProps {
  value: string
  title: string
  sections: Array<{
    heading: string
    description: string
    buttonText: string
    buttonAction: () => void
  }>
}

export function TabTemplate({ value, title, sections }: StudentTabProps) {
  return (
    <TabsContent value={value}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{section.heading}</h3>
              <p>{section.description}</p>
              <Button className="mt-2" onClick={section.buttonAction}>
                {section.buttonText}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </TabsContent>
  )
}