import { useRef, useEffect } from "react"

export default function Canvas1(params) {
    const cRef = useRef()

    useEffect(()=>{
        const ctx = cRef.current.getContext('2d')
        const img = new Image();
        img.onload = ()=>{
            ctx.drawImage(img, 0, 0)
        }
        img.src = '/imgs/dish.jpeg'
    },[])

    return (
        <div className="container">
            <canvas ref={cRef} width="800" height="600" style={{border: "1px solid lightblue"}}>

            </canvas>
        </div>
    )
}