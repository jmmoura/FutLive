export class News {
    title: string;
    description: string;
    link: string;
    image: any;
    date: string;
    newSourceImg: any;

    constructor(title: string,
                description: string,
                link: string,
                image: any,
                date: string,
                newSourceImg: any) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.image = image;
        this.date = date;
        this.newSourceImg = newSourceImg;
    }
}