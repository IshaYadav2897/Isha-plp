export class CafeDetails {
    constructor (
        public cafeId:number=null,
        public cafeName:String="",
        public cafeLocation:String="",
        public cafeOwner:String="",
        public cafeRating:number=null
    ) {}

    public getCafeID() {
        return this.cafeId;
    }
}