import Head from "next/head"
import tableStyles from "../common/style/tableStyle.module.css"
import { useEffect ,useState} from "react"
import axios from "axios"

export default function BoardList(){
    const columns = ["글번호", "제목", "작성자", "주제"]
    const [data, setData] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:5000/api/board/list').then(res=>{
            setData(res.data.board)
           
        }
        ).catch(err=>{ alert('게시판에서 데이터 없음')})
    }, [])
    return(
        <table className={tableStyles.table}>
            <thead>
                <tr><th colSpan={4}><h2>게시판</h2></th></tr>
            </thead>
            <tbody>
            <tr >
                {columns.map((column, index) => (
                <td key={index} >{column}</td>
                ))}
            </tr>
                    {data.length == 0 ?
                    <tr >
                        <td colSpan={4} >게시글 없음</td>
                    </tr>
                    :data.map((board)=> (
                        <tr key={board.passengerId}>
                            <td >{board.passengerId}</td>
                            <td >{board.name}</td>
                            <td >{board.teamId}</td>
                            <td >{board.subject}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}