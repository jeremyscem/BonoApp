import { makeVar } from "@apollo/client";
export  type SelectedCauseType= {
    id: number;
    icon: string | null;
    description: string | null;
    title: string | null}
export const causesItemsVar=makeVar<
   SelectedCauseType[]>([])