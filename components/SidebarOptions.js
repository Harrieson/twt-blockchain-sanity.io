const style ={
    wrapper: `w-min flex items-center rounded-[108px] p-4 cursor-pointer`,
    iconsContainer: `text-xl mr-4`,
    textGeneral: ` font-bold`,
    textActive: `font-bold`
}



function SidebarOptions({ text, Icon, isActive, setSelected, redirect }) {
    return (
        <div className={style.wrapper} onClick={() => {
            setSelected(text)
        }}>
            <div className={style.iconsContainer}>
                <Icon />
            </div>
            <div className={`${isActive ? style.textActive : style.textGeneral}`}>
                {text}
            </div>
        </div>
    )
}


export default SidebarOptions