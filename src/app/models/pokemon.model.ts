export interface Pokemon {
    name: string;
    height: number;
    weight: number;
    image: {
        front: string;
        back: string;
    };
    ability: string;
}
