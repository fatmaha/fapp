export class Vote {

    title: string;
    link : string;
    points: number;

    constructor( title: string, link: string){

        this.title = title;
        this.link = link;
        this.points = 0;
    
    }


    upvote(){
        this.points+=1;
        
    }

    downvote(){
        this.points-=1;
        
    }
      
}
