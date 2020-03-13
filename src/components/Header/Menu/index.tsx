import React from 'react'
import Photo from "./menu.png"
import style from './style.module.css'
import ButtonMenu from './ButtonMenu'

interface State {
    isShowed: boolean
}

export default class Menu extends React.PureComponent<{}, State> {
    state = {
        isShowed: false
    }

    myRef: React.RefObject<HTMLDivElement> = React.createRef()

    clousePopup = (event: any) => {
        if (!this.myRef.current?.contains(event.target)) {
            this.setState({ isShowed: false })
        }
    }

    componentDidUpdate(prevProps: {}, prevState: State) {
        if (prevState.isShowed === this.state.isShowed) {
            return
        }

        if (this.state.isShowed) {
            document.addEventListener('click', this.clousePopup)
        } else {
            document.removeEventListener('click', this.clousePopup)
        }
    }

    togglePopup = () => {
        this.setState({ isShowed: !this.state.isShowed })
    }


    render(){
        const {isShowed} = this.state
        return <div className={style.MenuBlock}>
            <button className={style.ButtonMenu} onClick={this.togglePopup}>
                        <img alt="iconmenu" src={Photo}/>
                    </button>
                 {isShowed && (
                    <>
                    <div className={style.OpenMenu} ref={this.myRef}>
                        <ButtonMenu/>                      
                    </div>
                    </>
                )} 
        </div>
    }
}
