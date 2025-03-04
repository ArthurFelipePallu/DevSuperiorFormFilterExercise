import "./styles.css";
import { UserInfoDTO } from "../../../Models/user-info";


type Prop ={
  userInfo : UserInfoDTO;
}

export default function LastSearch( {userInfo} : Prop) {

  return (
    <>
      <div className="last-search-container">
        <p className="last-search-repository">Last Repository : {userInfo.repository}</p>
        <p className="last-search-min">Min Value : {userInfo.lastSearchMin}</p>
        <p className="last-search-max">Max Value : {userInfo.lastSearchMax}</p>
        <p className="last-search-results">Results : {userInfo.lastSearchResult}</p>
      </div>
    </>
  );
}
