import "./styles.css";
import { useNavigate } from "react-router-dom";
import github_icon from "../../assets/github-icon.png";
import LastSearch from "../../Components/HomeBody/LastSearch";
import { GIT_NAME, SPRING_TOOL_NAME } from "../../Utils/system";
import spring_tool_icon from "../../assets/spring-tool-icon.png";
import * as userService from "../../Services/user-localStorage-service"
import RepositoryButton from "../../Components/HomeBody/RepositoryButton";
import { useState } from "react";

export default function HomeBody() {
  const navigate = useNavigate();
  const [repoName,setRepoName] = useState<string>("");
  const userInfo = userService.GetUserInfo();


  function handleClickGit() {
    setRepoName(GIT_NAME);
  }

  function handleClickSpring() {
    setRepoName(SPRING_TOOL_NAME);
  }

  function handleGoToFilter() {
    if (repoName != "")
      {
        userInfo.repository = repoName;

        userService.SaveUserInfo(userInfo);
        navigate("/formfilter");
      } 
  }

  return (
    <>
      <div className="form-filter-container">
        <div className="form-filter-container-area">
          <p>Choose a Repository</p>

          <div className="homebody-repository-buttons-conatiner">
            <div onClick={handleClickGit}>
              <RepositoryButton buttonImg={github_icon} buttonText="GIT" />
            </div>
            <div onClick={handleClickSpring}>
              <RepositoryButton
                buttonImg={spring_tool_icon}
                buttonText="DSCommerce"
              />
            </div>
          </div>
          <div onClick={handleGoToFilter} className="go-to-filter-button">
            <p>using : {repoName}</p>
            <p>GO TO FILTER</p>
          </div>
        </div>
      </div>
      <div className="form-filter-container">
        <div className="form-filter-container-area">
          Your last search
          <LastSearch userInfo={userInfo}/>
        </div>
      </div>
    </>
  );
}
