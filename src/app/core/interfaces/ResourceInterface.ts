interface Comment {
    comment: string;
    status: string;
    userId: string;
    userImageURL: string;
    userName: string;
    _id: string;
  }
  
 export interface RESOURCE  {
    comments: Comment[];
    createdAt: string;
    description: string;
    imageURL: string;
    status: string;
    title: string;
    updatedAt: string;
    userId: string;
    __v: number;
    _id: string;
  }