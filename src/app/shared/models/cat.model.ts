export class Cat {
    constructor (
        public id: string,
        public img: string,
        public breedName: string,
        public breedOrigin: string,
        public vocalisation: number,
        public dogFriendly: number,
        public affectionLevel: number,
        public editable: boolean = true,
        public userId: string,
    ){}
}