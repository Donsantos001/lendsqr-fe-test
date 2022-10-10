import React from "react";
import "./UsersInfo.scss";

const UsersInfo = ({ detail }: { detail: any }) => {
  return (
    <section className="user-info-section">
      <div className="user-info-con">
        <h4>Personal Information</h4>

        <div className="content-box wide">
          <div className="content-item">
            <span>FULL NAME</span>
            <h4>
              {detail?.profile?.lastName} {detail?.profile?.firstName}
            </h4>
          </div>

          <div className="content-item">
            <span>PHONE NUMBER</span>
            <h4>{detail?.profile?.phoneNumber}</h4>
          </div>

          <div className="content-item">
            <span>EMAIL ADDRESS</span>
            <h4>{detail?.email}</h4>
          </div>

          <div className="content-item">
            <span>BVN</span>
            <h4>{detail?.profile?.bvn}</h4>
          </div>

          <div className="content-item">
            <span>GENDER</span>
            <h4>{detail?.profile?.gender}</h4>
          </div>

          <div className="content-item">
            <span>MARITAL STATUS</span>
            <h4>Single</h4>
          </div>

          <div className="content-item">
            <span>CHILDREN</span>
            <h4>None</h4>
          </div>

          <div className="content-item">
            <span>TYPE OF RESIDENCE</span>
            <h4>Bungalow</h4>
          </div>
        </div>
      </div>

      <div className="hr"></div>

      <div className="user-info-con">
        <h4>Education and Employemt</h4>

        <div className="content-box wide">
          <div className="content-item">
            <span>LEVEL OF EDUCATION</span>
            <h4>{detail?.education?.level}</h4>
          </div>

          <div className="content-item">
            <span>EMPLOYMENT STATUS</span>
            <h4>{detail?.education?.employmentStatus}</h4>
          </div>

          <div className="content-item">
            <span>SECTOR OF EMPLOYMENT</span>
            <h4>{detail?.education?.sector}</h4>
          </div>

          <div className="content-item">
            <span>DURATION OF EMPLOYMENT</span>
            <h4>{detail?.education?.duration}</h4>
          </div>

          <div className="content-item">
            <span>OFFICE EMAIL</span>
            <h4>{detail?.education?.officeEmail}</h4>
          </div>

          <div className="content-item">
            <span>MONTHLY INCOME</span>
            <h4>
              {detail?.profile?.currency}
              {detail?.education?.monthlyIncome?.reduce(
                (a: any, b: any) => Number.parseInt(a) + Number.parseInt(b),
                0
              )}
            </h4>
          </div>

          <div className="content-item">
            <span>LOAN REPAYMENT</span>
            <h4>{detail?.education?.loanRepayment}</h4>
          </div>
        </div>
      </div>

      <div className="hr"></div>

      <div className="user-info-con">
        <h4>Socials</h4>

        <div className="content-box">
          <div className="content-item">
            <span>TWITTER</span>
            <h4>{detail?.socials?.twitter}</h4>
          </div>

          <div className="content-item">
            <span>FACEBOOK</span>
            <h4>{detail?.socials?.facebook}</h4>
          </div>

          <div className="content-item">
            <span>INSTAGRAM</span>
            <h4>{detail?.socials?.instagram}</h4>
          </div>
        </div>
      </div>

      <div className="hr"></div>

      <div className="user-info-con">
        <h4>Guarantor</h4>

        <div className="content-box">
          <div className="content-item">
            <span>FULL NAME</span>
            <h4>
              {detail?.guarantor?.lastName} {detail?.guarantor?.firstName}
            </h4>
          </div>

          <div className="content-item">
            <span>PHONE NUMBER</span>
            <h4>{detail?.guarantor?.phoneNumber}</h4>
          </div>

          <div className="content-item">
            <span>EMAIL ADDRESS</span>
            <h4>somerandomtext@gmail.com</h4>
          </div>

          <div className="content-item">
            <span>RELATIONSHIP</span>
            <h4>Not stated</h4>
          </div>
        </div>
      </div>

      <div className="hr"></div>

      <div className="user-info-con">
        <h4>Next of Kin</h4>

        <div className="content-box">
          <div className="content-item">
            <span>FULL NAME</span>
            <h4>Grace Effiom</h4>
          </div>

          <div className="content-item">
            <span>PHONE NUMBER</span>
            <h4>XXX-XXX-XXX-XXX</h4>
          </div>

          <div className="content-item">
            <span>EMAIL ADDRESS</span>
            <h4>somerandomtext@gmail.com</h4>
          </div>

          <div className="content-item">
            <span>RELATIONSHIP</span>
            <h4>Not Stated</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersInfo;
