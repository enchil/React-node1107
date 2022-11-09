export default function ToggleButton({statusIndex}){
    const classNames = ['btn']
    console.log({statusIndex});
    classNames.push(statusIndex ===0 ? 'btn-primary':'btn btn-outline-primary')
    return (
        
        <>
            <button type="button" className={classNames.join(' ')}>Primary button</button>
        </>
    )
}

ToggleButton.defaultProps = {
    statusIndex:0,
}