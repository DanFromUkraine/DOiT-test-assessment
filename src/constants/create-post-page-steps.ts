import { Step, StepWithNoBody } from "@/src/constants/types";

export const STEPS: (Step | StepWithNoBody)[] = [
      {
            label: "Заголовок",
            inputLabel: "Заголовок",
            inputName: "title",
            type: "input",
      },
      {
            label: "Тіло",
            inputLabel: "Тіло",
            inputName: "body",
            type: "input",
      },
      {
            label: "Попередній перегляд",
            type: "empty",
      },
];
