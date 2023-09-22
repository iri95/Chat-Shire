import React, { useEffect } from "react";
import styles from "./ProfilePage.module.css";
import ProfileLarge from "../components/profile/ProfileLarge";
import { useNavigate, useLocation } from "react-router-dom";

import RadarChart from "../components/analysis/RadarChart";
import BarChart from "../components/analysis/BarChart";
import LeftSide from "../components/common/LeftSide";
import { getProfile } from "../utils/userApi";
import { loginuser } from "../stores/atom";
import { BsGithub, BsCodeSlash, BsPersonFill } from "react-icons/bs";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoPython,
  BiLogoReact,
  BiLogoVuejs,
  BiLogoDjango,
  BiLogoCss3,
  BiLogoFlutter,
  BiLogoGit,
} from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRecoilState } from "recoil";

const achievements = [];

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function ProfilePage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(loginuser);
  const bronze = process.env.PUBLIC_URL + "/assets/achievements/bronze.png"
  const silver = process.env.PUBLIC_URL + "/assets/achievements/silver.png"
  const gold = process.env.PUBLIC_URL + "/assets/achievements/gold.png"

  console.log(userData.challengeInfoResponse)

  function achievementPath(id: any) {
    return process.env.PUBLIC_URL + '/assets/achievements/' + id + '.png'
  }

  function profileSetting() {
    navigate("/profile/custom");
  }

  const getProfilePage = async () => {
    try {
      const response = await getProfile();
      console.log(response.data.result[0]);
      setUserData(response.data.result[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfilePage();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F7F7F7",
      }}
    >
      <LeftSide />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2vh 2vw",
          width: "75vw",
          height: "81vh",
          borderRadius: "20px",
          border: "1px solid #E5E8EB",
          backgroundColor: "#ffffff",
        }}
      >
        <div className={styles.profileHeader}>
          <img
            style={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "140px",
              backgroundColor: userData.profileColor,
              zIndex: "5",
            }}
            src={process.env.PUBLIC_URL + userData.profileImage}
            alt=""
          />
          <div className={styles.profileHeaderDesc}>
            <div className={styles.profileHeaderLeft}>
              <span className={styles.profileName}>{userData.nickname} {userData.position}</span>
              <div className={styles.profileCareer}>
                <div className={styles.profileCareerItem}>
                  <BsGithub size={30} style={{ marginRight: "8px" }} />
                  <span>{userData.githubId}</span>
                </div>
                <div className={styles.profileCareerItem}>
                  {userData.mySkill?.map((item: any) => {
                    <span>{item}</span>
                  })}
                </div>
                <div className={styles.profileCareerItem}>
                  <BsPersonFill size={30} style={{ marginRight: "8px" }} />
                  <span>{userData.introduction}</span>
                </div>
              </div>
              <div className={styles.profileIntroduce}>
                <span>{userData.detailIntroduction}</span>
              </div>
              {/* <div className={styles.profileTag}>
                <span>{userData.hashTag}</span>
              </div> */}
            </div>
            <div className={styles.profileHeaderRight}>
              <div className={styles.profileRadarContainer}>
                <RadarChart />
              </div>
              <div className={styles.profileBarContainer}>
                <BarChart />
              </div>
            </div>
            <IoMdSettings
              className={styles.profileSettingButton}
              color="#575757"
              size={30}
              onClick={profileSetting}
            />
          </div>
        </div>

        <div className={styles.profileBody}>
          <div className={styles.profileBodyTitle}>
            <span style={{ color: "#575757", fontSize: "34px" }}>
              Achievement{" "}
            </span>
            <span style={{ color: "#575757", fontSize: "20px" }}>5/48</span>
          </div>
          <div className={styles.progressBar}>
            <Box sx={{ width: "400px" }}>
              <LinearProgressWithLabel value={10} />
            </Box>
          </div>
          <div className={styles.AchievementContainer}>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(1)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(2)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(3)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(4)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(5)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(6)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(7)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(8)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(9)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(10)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(11)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={bronze}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(12)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(13)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(14)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(15)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(16)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(17)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(18)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(19)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(20)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(21)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(22)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(23)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={silver}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(24)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(25)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(26)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(27)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(28)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(29)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(30)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(31)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(32)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(33)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(34)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(35)}
                alt=""
              />
            </div>
            <div className={styles.AchievementItemContainer}>
              <span className={styles.AchievementItemCount}>
                0/6
              </span>
              <img
                className={styles.AchievementItemDesc}
                width="0px"
                height="78px"
                src={gold}
              />
              <img
                className={styles.AchievementItem}
                width="78px"
                height="78px"
                src={achievementPath(36)}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
