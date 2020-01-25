const INITIAL_STATE={

    sections:[{
        title:'HATS',
        imageUrl:'https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
        id:1,
        linkUrl:'shop/hats'
    },
    {
        title:'JACKETS',
        imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
        id:2,
        linkUrl:'shop/jackets'
    },
    {
        title:'SNEAKERS',
        imageUrl:'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
        id:3,
        linkUrl:'shop/sneakers'
    },
    {
        title:'WOMENS',
        imageUrl:'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
        size:'large',
        id:4,
        linkUrl:'shop/womens'
    },
    {
        title:'MENS',
        imageUrl:'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
        size:'large',
        id:5,
        linkUrl:'shop/mens'
    }]
}

const directoryReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;