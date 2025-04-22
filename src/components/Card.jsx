function Card() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-3 text-center">
          <a href="#">
            <svg
              className="mb-3"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
              viewBox="0 0 512 512"
              fill="#6f42c1"
            >
              <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
            </svg>
          </a>
          <h5>Email Design</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            id volume amet.
          </p>
        </div>
        <div className="col-md-3 text-center">
          <a href="#">
            <svg
              className="mb-3"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="40"
              viewBox="0 0 640 512"
              fill="#6f42c1"
            >
              <path d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
            </svg>
          </a>
          <h5>Web Design</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            id volume amet.
          </p>
        </div>

        <div className="col-md-3 text-center">
          <a href="#">
            <svg
              className="mb-3"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
              viewBox="0 0 512 512"
              fill="#6f42c1"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </a>
          <h5>Email Design</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            id volume amet.
          </p>
        </div>
        <div className="col-md-3 text-center">
          <a href="#">
            <svg
              className="mb-3"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="28.75"
              viewBox="0 0 460 512"
                  fill="#6f42c1"
            >
              <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
            </svg>
          </a>
          <h5>Research</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            id volume amet.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
