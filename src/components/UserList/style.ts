import styled from "styled-components"
export const Component = styled.div`


    margin: 0;
    padding: 0;
    background:rgb(39, 39, 39);

    ul{
        list-style: none;
    }
    li{
        background: #171717;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
        border-radius: 8px;
        padding: 8px;
    }

    button:first-child{
        margin: 0 5px ;
        border: 1px solid rgb(99, 240, 151);
        transition: 0.3s ease;
    }

     button:first-child:hover{
        margin: 0 5px ;
        background:  rgb(88, 253, 149);
    }

     button:last-child{
        margin: 0 5px ;
        border: 2px solid rgb(250, 57, 57);
    }

    button:last-child:hover{
        margin: 0 5px ;
        background:  rgb(253, 88, 88);

    }
   

`