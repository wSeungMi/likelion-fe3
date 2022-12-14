import React from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Product() {
    useEffect(() => {
        // axios
        axios.get("http://test.api.weniv.co.kr/mall").then((res) => {
            console.log("axios");
            console.log(res);
            console.log(res.data);
        });

        // fetch
        fetch("http://test.api.weniv.co.kr/mall")
            .then((res) => {
                console.log("fetch");
                console.log(res);
                // console.log(res.json()) // pending됩니다.
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, []); // ,[] 한번만 실행 / res === response
    return <div>Product</div>;
}
