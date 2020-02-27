export interface IFeedItem{
    image?: string
name?: string
profilePic?: string
status?: string

}

export class FeedItem implements IFeedItem{
    constructor(
        public image?: string,
        public name?: string,
        public profilePic?: string,
        public status?: string
    ){

    }
}