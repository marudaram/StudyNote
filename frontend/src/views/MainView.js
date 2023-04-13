import styled from "./MainView.module.css"

const MainView = () => {


    return (
        <div className={styled.WrapBox}>
            <div className={styled.firstBox}>
                <div className={styled.firstMiniBox}>
                    <table id="qnaTable">
                        <thead>
                        <tr>
                            <td>No</td>
                            <td>단어</td>
                            <td>뜻</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>glory</td>
                            <td>영광</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styled.firstMiniBox2}>

                </div>
            </div>
            <div className={styled.secondBox}>
                <div className={styled.secondMiniBox}>

                </div>
                <div className={styled.secondMiniBox2}>

                </div>
            </div>
            <div className={styled.thirdBox}>
                <div className={styled.thirdLoginBox}>

                </div>
            </div>
        </div>
    )
}

export default MainView;