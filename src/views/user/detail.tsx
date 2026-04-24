import { useEffect } from "react";
import { userStore } from "../../store";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import { useParams, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import { BandlikPdf, BgLogo, TalimPdf } from "../../assets";

const UserDetail = () => {
  const { id } = useParams();
  // @ts-ignore
  const [searchParams, setSearchParams] = useSearchParams();
  const { getDetail, detail, detailLoading } = userStore();

  useEffect(() => {
    getDetail(id, { year: searchParams.get("year") });
  }, [id, searchParams]);

  return detailLoading ? (
    "Loading..."
  ) : (
    <>
      <img src={BgLogo} className="bg-logo" alt="" />
      <section id="center">
        <code>
          Guvohnoma raqami <span>№ {detail?.certificateNumber}</span>
        </code>
        <div className="hero">
          <img
            src={BASE_URL + detail?.photo}
            style={{ borderRadius: "4px" }}
            className="base"
            width="170"
            height="179"
            alt=""
          />
        </div>
        <div>
          <h2>
            {detail?.firstName} {detail?.lastName} {detail?.patronymic}
          </h2>
          <p style={{ marginBottom: "-8px" }}>Malakasi</p>
          {/* <p>
            <code>ЭЛЕКТРОГАЗОСВАРЩИК</code>
          </p> */}
        </div>
        <button className="counter">{detail?.qualification}</button>
      </section>

      <div className="ticks"></div>
      <div className="given">
        <h2>Berilgan tashkilot nomi</h2>
        <ul>
          <li>
            <h4>{detail?.given}</h4>
          </li>
        </ul>
      </div>
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Ma'lumotlar</h2>
          <p>
            " SANOAT XAVFSIZLIGI"DQ ob'ektlarida xizmat koʻrsatuvchi
            xodimlarning bilimlarini qayta tekshiruv korxona mamuriyati
            inspektori bilan kelishilgan holda kamida yilda 1 marotaba
            oʻtkazilishi kerak.
          </p>
          <ul>
            <li>
              <label>Tugʻilgan sana</label>
              <div className="info-box">
                {/* <img className="logo" src={viteLogo} alt="" /> */}
                {detail?.birthDate}
              </div>
            </li>
            <li>
              <label>Passport raqami</label>
              <div
                className="info-box"
                style={{ fontFamily: "monospace", fontWeight: "bold" }}
              >
                {/* <img className="button-icon" src={reactLogo} alt="" /> */}
                {detail?.passportNumber?.slice(0, 2)} |{" "}
                {detail?.passportNumber?.slice(2, 10)}
              </div>
            </li>
            <li>
              <label>Bayonnoma raqami</label>
              <div className="info-box">{detail?.protocolNumber}</div>
            </li>
            <li>
              <label>Bayonnoma roʻyxatdan oʻtgan sana</label>
              <div className="info-box">{detail?.protocolRegistrationDate}</div>
            </li>
            <li>
              <label>Mutaxassisligi</label>
              <div className="info-box">{detail?.specialty}</div>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Litsenziyalar</h2>
          <p>Yuklab olish uchun</p>
          <ul>
            <li>
              <a href={BandlikPdf} target="_blank" className="info-box">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#documentation-icon"></use>
                </svg>
                Litsenziya
              </a>
            </li>
            <li>
              <a href={TalimPdf} target="_blank" className="info-box">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#documentation-icon"></use>
                </svg>
                Guvohnoma
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
};

export default UserDetail;
