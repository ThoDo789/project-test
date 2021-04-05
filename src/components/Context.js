import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
        state ={
            products:[

                {
                    "id":"1",
                    "title":"Nike shoes 01",
                    "src":"http://img.mwc.com.vn/giay-thoi-trang?&w=450&h=450&FileInput=//Upload/2021/04/z2415936168169-b4b3d8c2aa72578a191d16890836e9b1.jpg",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1,
                },
                
                {
                    "id":"2",
                    "title":"Nike shoes 02",
                    "src":"https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },
                
                {
                    "id":"3",
                    "title":"Nike shoes 03",
                    "src":"https://i.picsum.photos/id/993/200/300.jpg?blur=2&hmac=VLYeTdlOFpINpXuVua-_xNIml2yJtJ3dmkE-CymenmI",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },
                
                {
                    "id":"4",
                    "title":"Nike shoes 04",
                    "src":"https://i.picsum.photos/id/972/200/300.webp?hmac=IfpUVVkxu5MU1V16DTTMt453hfJYKp8mrDyax8yGOAs",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },
                
                {
                    "id":"5",
                    "title":"Nike shoes 05",
                    "src":"http://img.mwc.com.vn/giay-thoi-trang?&w=600&h=600&FileInput=//Upload/2021/04/z2411605878211-0bea2b3a25e45e64aeb88e089bd6ef8d.jpg",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },
                
                {
                    "id":"6",
                    "title":"Nike shoes 06",
                    "src":"http://img.mwc.com.vn/giay-thoi-trang?&w=450&h=450&FileInput=//Upload/2021/04/z2411581638624-4ad5812748ec63661d508c4571e432b1.jpg",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },
                
                {
                    "id":"7",
                    "title":"Nike shoes 07",
                    "src":"http://img.mwc.com.vn/giay-thoi-trang?&w=450&h=450&FileInput=//Upload/2021/04/z2415936168169-b4b3d8c2aa72578a191d16890836e9b1.jpg",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },
                
                {
                    "id":"8",
                    "title":"Nike shoes 08",
                    "src":"http://img.mwc.com.vn/giay-thoi-trang?&w=450&h=450&FileInput=//Upload/2021/04/z2415936168169-b4b3d8c2aa72578a191d16890836e9b1.jpg",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },
                
                {
                    "id":"9",
                    "title":"Nike shoes 09",
                    "src":"http://img.mwc.com.vn/giay-thoi-trang?&w=450&h=450&FileInput=//Upload/2021/04/z2415936168169-b4b3d8c2aa72578a191d16890836e9b1.jpg",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },
                
                {
                    "id":"10",
                    "title":"Nike shoes 010",
                    "src":"http://img.mwc.com.vn/giay-thoi-trang?&w=450&h=450&FileInput=//Upload/2021/04/z2415936168169-b4b3d8c2aa72578a191d16890836e9b1.jpg",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },
                
                {
                    "id":"11",
                    "title":"Nike shoes 011",
                    "src":"http://img.mwc.com.vn/giay-thoi-trang?&w=450&h=450&FileInput=//Upload/2021/04/z2415936168169-b4b3d8c2aa72578a191d16890836e9b1.jpg",
                    "Description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                    "Content":"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "price":23,
                    "color":["red","black","crimson","teal"],
                    "count":1
                },

            ]
        };


    render() {
        const {products} = this.state;
        return (
    
                <DataContext.Provider value={{products}}>
                    {this.props.children}
                </DataContext.Provider>
   
        );
    }
}

