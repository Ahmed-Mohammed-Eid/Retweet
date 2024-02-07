import classes from "./AccountHomeContent.module.scss";
import Image from "next/image";
import PercentageCircle from "@/app/components/UserProfileComponents/Percentagecircle/PercentageCircle";

export default function AccountHomeContent() {
    return (
        <div className={classes.AccountHomeContent}>
            <div className={classes.AccountHomeContent__Header}>
                <div className={classes.AccountHomeContent__Header__Image}>
                    <Image width={250} height={250} src="/assets/profile/managementImage.png" alt="Management Image"/>
                </div>
                <div className={classes.AccountHomeContent__Header__Name}>
                    <h3>Hi, Yazan Mohamed</h3>
                    <h2>Welcome to Management</h2>
                    <p>Project activity will be updated here.</p>
                </div>
                <div className={classes.AccountHomeContent__Header__Texture}>
                    <Image width={203} height={109} src="/assets/profile/texture.png" alt="Texture"/>
                </div>
            </div>
            <div className={classes.AccountHomeContent__Body}>
                <div className={classes.AccountHomeContent__Body__Card}>
                    <PercentageCircle percentage={92} colour={"rgba(245, 169, 47, 1)"}
                                      bgColor={"rgba(245, 169, 47, 0.4)"}/>
                    <h2>Promoted</h2>
                </div>
                <div className={classes.AccountHomeContent__Body__Card}>
                    <PercentageCircle percentage={78.6} colour={"rgba(0, 172, 238, 1)"}
                                      bgColor={"rgba(0, 172, 238, 0.4)"}/>
                    <h2>Pending</h2>
                </div>
                <div className={classes.AccountHomeContent__Body__Card}>
                    <PercentageCircle percentage={78.6} colour={"rgba(255, 59, 59, 1)"}
                                      bgColor={"rgba(255, 59, 59, 0.4)"}/>
                    <h2>Rejected</h2>
                </div>
                <div className={classes.AccountHomeContent__Body__Card}>
                    <PercentageCircle percentage={96} colour={"rgba(46, 172, 109, 1)"} bgColor={
                        "rgba(46, 172, 109, 0.4)"}/>
                    <h2>Total</h2>
                </div>
                <div className={classes.AccountHomeContent__Body__Card}>
                    <PercentageCircle percentage={50} colour={"rgba(255, 59, 59, 1)"}
                                      bgColor={"rgba(255, 59, 59, 0.4)"}/>
                    <h2>Deleted</h2>
                </div>
            </div>
        </div>
    );
}