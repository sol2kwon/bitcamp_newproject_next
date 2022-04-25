import React,{useState} from 'react'
import Link from "next/link";
import tableStyles from '../common/style/tableStyle.module.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Nav(){

    const userUrls =["/user/join","/user/login","/user/logout","/user/getUsers","/user/updateUser","/user/withdrawUser"]
    const userTitle = ["회원가입","로그인","로그아웃","사용자목록","사용자수정","회원탈퇴"]

    
    const basicUrls =["/basic/counter","/basic/calc","/basic/bmi"]
    const basicTitle = ["카운터","계산기","BMI"]

    const gameUrls = ["/game/addTeam/","/game/getTeam/","/game/modifyTeam/","/game/removeTeam/"
                        ,"/game/addGame/","/game/getGame/","/game/modifyGame/","/game/removeGame/"]
    const gameTitle = ["팀등록","팀목록","팀수정","팀삭제","게임등록","게임목록","게임수정","게임삭제"]

    const todoUrls =["/todo/addTodo/","/todo/getTodos/","/todo/modifyTodo","/todo/removeTodo/"]
    const todoTitle = ["스케줄등록","스케줄목록","스케줄수정","스케줄삭제"]

    const boardUrls =["/board/addArticle/","/board/getArticles/","/board/modifyArticle/","removeArticle/",]
    const boardTitle = ["게시글등록","게시글목록","게시글수정","게시글삭제"]

    return(
        <table className={tableStyles.table}>
        <tr>
        <td>
          <SubMenu title={"사용자"} urls={userUrls} subTitles={userTitle}/>
          <SubMenu title={"베이직"} urls={basicUrls} subTitles={basicTitle}/>
          <SubMenu title={"팀/게임"} urls={gameUrls} subTitles={gameTitle}/>
          <SubMenu title={"스케줄"} urls={todoUrls} subTitles={todoTitle}/>
          <SubMenu title={"게시판"} urls={boardUrls} subTitles={boardTitle}/>
          </td>
        </tr>
      </table>
    );
  }
  const SubMenu = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (<><Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
        {props.title}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
           {props.urls.map(function(url, i){
              return <MenuItem onClick={handleClose}><Link href={url} key={i}>{props.subTitles[i]}</Link></MenuItem>
            })}
        </Menu></>
    )}
