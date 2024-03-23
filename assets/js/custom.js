(async () => {
    $.getJSON("./assets/data/data.json", (data) => {

        //#region Hero
        $(".intro_text").append(`
            <svg viewBox="0 0 1320 300">
                <text x="50%" Y="50%" text-anchor="middle"> HI </text>
            </svg>
        `);

        $(".hero-content-box").append(`
            <span class="hero-sub-title wow fadeInLeft" data-wow-delay="1.1s">I am ${data.fullName}</span>
            <h1 class="hero-title wow fadeInLeft" data-wow-delay="1.2s">${data.profession} +<br>3D Designer</h1>
            <div class="hero-image-box d-md-none text-center wow fadeInRight" data-wow-delay="1.3s">
                <img src="${data.profileImageUrl}" alt="">
            </div>
            <p class="lead wow fadeInLeft" data-wow-delay="1.4s">${data.tagline}</p>
            <div class="button-box d-flex flex-wrap align-items-center">
                <a href="assets/img/CV.pdf" target="_blank" class="btn tj-btn-secondary wow fadeInLeft" data-wow-delay="1.5s">Download CV</a>
            </div>
        `);

        $(".hero-image-box").append(`<img src="${data.profileImageUrl}" alt="${data.fullName}'s Profile Image">`);

        $.each(data.socialLinks, (i, sl) => {
            $(".hero-content-box .button-box.d-flex.flex-wrap.align-items-center").append(`
                <ul class="ul-reset social-icons wow fadeInLeft" data-wow-delay="1.6s">
                    <li><a href="${sl.link}" target="_blank"><i class="${sl.icon}"></i></a></li>
                </ul>
            `)
        })

        // ,{
        //     "icon": "fa-brands fa-instagram",
        //     "platformName": "Instagram",
        //     "link": ""
        // },
        // {
        //     "icon": "fa-brands fa-twitter",
        //     "platformName": "Twitter",
        //     "link": ""
        // },
        // {
        //     "icon": "fa-brands fa-behance",
        //     "platformName": "Behance",
        //     "link": ""
        // }

        $.each(data.funFactArea, (i, ffa) => {
            $(".funfact-area .row").append(`
                <div class="col-6 col-lg-3">
                    <div class="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                        <div class="number"><span class="odometer" data-count="${ffa.dataCount}">${ffa.dataCount}</span></div>
                        <div class="text">${ffa.yearsOrExpOrState} <br>${ffa.achievement}</div>
                    </div>
                </div>
            `)
        })
        //#endregion Hero

        //#region Services
        $.each(data.services, (i, s) => {
            $(".services-widget").append(`
                <div class="service-item ${s.current} d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".5s">
                    <div class="left-box d-flex flex-wrap align-items-center">
                        <span class="number">0${i + 1}</span>
                        <h3 class="service-title">${s.name}</h3>
                    </div>
                    <div class="right-box">
                        <p>${s.description}</p>
                    </div>
                    <!-- <i class="flaticon-up-right-arrow"></i> -->
                    <!-- <button data-mfp-src="#service-wrapper" class="service-link modal-popup"></button> -->
                </div>
          `);
        });
        //#endregion Service

        //#region Portfolios
        $.each(data.portfolioHeadings, (i, ph) => {
            $(`.filter-button-group`).append(`<button data-filter=".${ph.dataFilter}">${ph.name}</button>`);
        });

        $.each(data.portfolios, (i, p) => {
            $(`.portfolio-box-content`).append(`
                <div class="col-3 portfolio-item ${p.class}">
                    <div class="image-box">
                        <img src="${p.imageUrl}" alt="${p.name} Portfolio Image">
                    </div>
                    <div class="content-box">
                        <h3 class="portfolio-title">${p.name}</h3>
                        <!-- <p>Cosmetic company logo design</p> -->
                        <i class="flaticon-up-right-arrow"></i>
                        <button data-mfp-src="#${p.dataMfpSrc}" class="portfolio-link modal-popup"></button>
                    </div>
                </div>
            `);

            $(".portfolio-modal").append(`
                <div id="${p.dataMfpSrc}" class="popup_content_area zoom-anim-dialog mfp-hide">
                    <div class="popup_modal_img"><img src="${p.imageUrl}" alt="${p.name} Portfolio Image" class="img-thumbnail rounded mx-auto d-block portfolio-image-on-modal"></div>
                </div>
            `)
        });

        //#endregion Portfolios

        //#region Experiences
        $.each(data.experiences, (i, exp) => {
            $(".experiences").append(`
                <div class="resume-item wow fadeInLeft" data-wow-delay=".4s">
                    <div class="time">${exp.duration}</div>
                        <h3 class="resume-title">${exp.profession}</h3>
                    <div class="institute">${exp.company}</div>
                </div>
            `)
        })
        //#endregion Experiences

        //#region Education
        $.each(data.education, (i, edu) => {
            $(".education").append(`
                <div class="resume-item wow fadeInLeft" data-wow-delay=".4s">
                    <div class="time">${edu.duration}</div>
                        <h3 class="resume-title">${edu.degree}</h3>
                    <div class="institute">${edu.institute}</div>
                </div>
            `)
        })
        //#endregion Education

        //#region Skills
        $.each(data.skills, (i, s) => {
            $(`.skills-widget`).append(`
              <div class="skill-item wow fadeInUp" data-wow-delay=".3s">
                <div class="skill-inner">
                    <div class="icon-box">
                        <img src="${s.imageUrl}" alt="${s.name}'s Icon">
                    </div>
                    <div class="number">${s.percentage}%</div>
                </div>
                <p>${s.name}</p>
              </div>
          `);
        });
        //#endregion Skills

        //#region Testimonials
        $.each(data.testimonials, (i, t) => {
            $(".owl-carousel.testimonial-carousel").append(`
            <div class="testimonial-item">
            <div class="top-area d-flex flex-wrap justify-content-between">
                <div class="logo-box">
                    <!-- <img src="${t.productImageUrl}" alt=""> -->
                </div>
                <!-- <div class="image-box">
                    <img src="${t.imageUrl}" alt="">
                </div> -->
            </div>
            <div class="icon-box">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                        fill="url(#paint0_linear_263_588)" />
                    <defs>
                        <linearGradient id="paint0_linear_263_588" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                        fill="url(#paint0_linear_263_589)" />
                    <defs>
                        <linearGradient id="paint0_linear_263_589" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <p class="quote">${t.review}</p>
            <h4 class="name">${t.name}</h4>
            <span class="designation">${t.place}</span>
        </div>

          `);
        });
        //#endregion Testimonials

        //#region Navigation Links (header & footer)
        $.each(data.navigationLinks, (i, nl) => {
            $(".navigational-links").append(`<li><a href="#${nl.section}">${nl.name}</a></li>`);
        });
        //#endregion Contact

        //#region Footer
        $(".copyright-owner").append(`${data.basicInfo.copyrightOwner}`)
        //#endregion Footer
    });
})();
