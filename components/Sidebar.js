import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import SidebarOptions from '../components/SidebarOptions'
import {useState} from 'react'

const style = {
    wrapper: ` flex-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[1b8cd8] flex items-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:`,
    profileLeft: ` flex items-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a8]`,
    moreContainer: ` flex items-center mr-7`
}

function Sidebar({ initialSelectedIcon = 'Home' }) {
    const [selected, setSelected] = useState('initialSelectedIcon')
  return (
    <div className={style.wrapper}>
        <div className={style.twitterIconContainer}>
            <VscTwitter />
        </div>
        <div className={style.navContainer}>
            <SidebarOptions Icon={selected === 'Home' ? VscTwitter: VscTwitter} />
            <div>Explore</div>
            <div>Notifications</div>
            <div>Message</div>
            <div>BookMarks</div>
            <div>Lists</div>
            <div>Profile</div>
            <div>More</div>

            <div className={style.tweetButton}>Mint</div>
        </div>
        <div className={style.profileButton}>
            <div className={style.profileLeft}></div>
            <div className={style.profileRight}>
                <div className={style.details}>
                    <div className={style.name}>Harrie Mburu</div>
                    <div className={style.handle}>@HarrieMburu</div>
                </div>
                <div className={style.moreContainer}>
                    <FiMoreHorizontal />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar