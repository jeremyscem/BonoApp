export type CausesData = {
    count: number;
    data: ItemCause[]
  };


  export type ItemCause = {
    active: boolean;
    description: string | null;
    icon: string | null;
    id: number;
    impactBackground: string | null;
    impactBody: string | null;
    impactHeader: string | null;
    impactImage: string | null;
    order: number;
    shortDescription: string | null;
    tagline: string | null;
    title: string | null;
  }