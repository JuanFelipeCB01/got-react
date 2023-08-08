import React from 'react'

export default function SortButton({array}) {

    const sortThis = (array)=>{
        return array.sort((a, b)=> a.age + b.age)
    }

    return (
    <button onClick={sortThis()}>Revers Sort</button>
    )
}
