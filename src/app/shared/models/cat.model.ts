export class Cat {
    constructor (
        public id: string,
        public img: string,
        public breed_name: string,
        public breed_origin: string,
        public vocalisation: number,
        public dog_friendly: number,
        public affection_level: number,
        public editable: boolean = true
    ){}
}