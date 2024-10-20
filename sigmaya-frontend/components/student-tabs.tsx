import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InteractiveScheduleComponent } from "@/components/interactive-schedule";
import { TabTemplate } from "@/components/tab-template";
import { useRouter, usePathname } from "next/navigation";

interface Class {
  id: number;
  name: string;
  code: string;
  schedule: string;
  professor: string;
}

interface StudentTabsProps {
  classes: Class[];
}

export default function StudentTabs({}: StudentTabsProps) {
  const router = useRouter();
  const pathname = usePathname();

  const academicSections = [
    {
      heading: "Registro de cursos y estado de cuenta",
      description:
        "Inscribe tus cursos, realiza tu matrícula y analiza tu estado de cuenta.",
      buttonText: "Ir a Registro",
      buttonAction: () => {
        router.push(`${pathname}/course-registration`);
      },
    },
    {
      heading: "Perfil del Estudiante",
      description: "Visualiza tu información académica en un solo sitio.",
      buttonText: "Ver Perfil",
      buttonAction: () => {
        router.push(`${pathname}/profile`);
      },
    },
    {
      heading: "Seguimiento a la formación",
      description: "Analiza, revisa, planea y proyecta tu proceso formativo.",
      buttonText: "Ver Seguimiento",
      buttonAction: () => {
        router.push(`${pathname}/formation-tracking`);
      },
    },
  ];

  const tabData = [
    {
      value: "academic",
      title: "Información Académica",
      sections: academicSections,
    },
  ];

  return (
    <Tabs defaultValue="schedule" className="space-y-4">
      <TabsList>
        <TabsTrigger value="schedule">Horario</TabsTrigger>
        {tabData.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="schedule">
        <InteractiveScheduleComponent />
      </TabsContent>

      {tabData.map((tab) => (
        <TabTemplate
          key={tab.value}
          value={tab.value}
          title={tab.title}
          sections={tab.sections}
        />
      ))}
    </Tabs>
  );
}
