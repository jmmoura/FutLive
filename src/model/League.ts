export class League {
    id: number;
    name: string;
    logo: string;
    type: Type;
    coutryCode: string;

    constructor(id: number, name: string, logo: string,
                type: Type, countryCode: string) {
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.type = type;
        this.coutryCode = countryCode;
    }
}

enum Type {
    League = 'League',
    Cup = 'Cup'
}