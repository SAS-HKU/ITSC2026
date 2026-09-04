# Socially Compliant and Strategic Autonomous Driving

Homepage for the workshop at IEEE ITSC 2026, Naples, Italy.

**15:15–17:45 (CEST) · Tuesday 15 September 2026 · Aula 5 Room**

Organizer: **Safe-Autonomous-Systems Lab, Department of Data and Systems Engineering, The University of Hong Kong**. Primary organizer and first speaker: **Prof. Chen Sun**. Workshop contact: <c87sun@hku.hk>.

## Preview locally

This is a dependency-free static site. From the repository root, run:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000/>.

## Main files

- `index.html` contains all workshop wording, speaker details, profile links, and page metadata.
- `static/css/index.css` contains the visual system and responsive layouts.
- `static/js/index.js` provides the accessible mobile navigation.

## Logos and Naples photograph

The supplied `ITSC_logo.png` contains the ITSC 2026, IEEE ITSS, and IEEE marks together. It is used without distortion in the `.conference-branding` row near the top of `index.html`:

```text
static/images/logos/itsc-itss-ieee.png
static/images/logos/ieee-itss.png
static/images/logos/hku-dase.svg
static/images/naples/bay-of-naples.jpg
```

The separate supplied `ITSS.png` is used as the compact navigation logo. The Naples image is the supplied `naples.jpg`, used in the conference information block. Original source files have not been altered. Replace these copies to change the imagery; if dimensions change, update the `<img>` width/height attributes as well. Confirm image reuse permissions and any required photographer credit before public publication.

The department logo is used in the organizer block, sourced unchanged from the [official DASE website](https://www.dase.hku.hk/assets/img/logo-new.svg). It identifies the organizing department; it does not imply any additional sponsorship or funding.

The title section uses the supplied `stock_3.png` as a decorative CSS background (`static/images/research/autonomous-driving.png`), softened by a white gradient overlay. Adjust the opacity stops in `.hero` to change its prominence. There is no separate stock-image strip or caption. The `stock_2.jpg` copy at `static/images/research/connected-traffic.jpg` is retained for future use but not displayed; `stock_1.jpg` is also not displayed. Confirm any required stock-image licenses/credits before public publication.

Panel/organizer names link to the supplied university or Google Scholar profiles, with affiliations shown beneath. Display names and titles follow the organizer's requested wording, including “Prof. Xing Yang” and “Prof. Chao Huang”; their linked institutional profiles currently use “Dr Yang Xing” and “Dr Chao Huang”, respectively. The updated `xing-yang.jpg` is copied to the existing `static/images/people/yang-xing.jpg` path.

## Speaker and panelist photos

Shared portraits are stored in `static/images/people/`; Chen Sun's and Yukun Lu's images are reused in both sections. Names follow this convention:

```text
static/images/people/chen-sun.jpg
static/images/people/chen-lv.jpg
static/images/people/yukun-lu.jpg
static/images/people/yang-xing.jpg
static/images/people/chao-huang.jpg
static/images/people/guoshun-cai.jpg
static/images/people/zejian-deng.jpg
```

All portraits are displayed in **1:1 square frames**, with `object-fit: cover` and top-centered crops. The image is never stretched. Speaker size is controlled by `--portrait-size` in `.speaker-card`; panel images use `.panelist-photo`. A square source of 512×512 px or larger is convenient, but portrait sources also work.

For an individual crop adjustment, add `style="--portrait-position: center 20%"` to its image. This changes only the displayed crop, not the original file.

The speaker order is Chen Sun, Chen Lv, Yukun Lu, then one intentionally blank slot. The former Guodong Yin profile and talk have been removed from the public page. To fill the blank `.speaker-slot`, remove `aria-hidden="true"` and the `speaker-slot` class, then add the new speaker's portrait and a `.speaker-details` block following the existing cards. Example image markup:

```html
<img class="speaker-photo" src="static/images/people/new-speaker.jpg"
     width="512" height="512" alt="Speaker's name" loading="lazy" decoding="async">
```

Use `class="panelist-photo"` for a corresponding panel/organizer portrait. Set width and height attributes to the actual source dimensions. All supplied portraits are now integrated, including `SunChen.jpg` and `zejian-deng.jpg`.

Deferred title, preserved here for easy restoration: “Fast-and-Slow End-to-End Driving Models for Socially Compliant and Strategic Autonomous Driving”.

## Items still awaiting confirmation

- Detailed running order and individual talk times
- Additional related links
- Speaker biographies and replacement speaker details

## Registration and acknowledgements

The attendance section links to the [official IEEE ITSC 2026 registration page](https://ieee-itsc.org/2026/attend/registration/). It summarizes workshop-only versus full/student attendance, PaperCept access, confirmation, and in-person attendance. Fees and detailed policies are intentionally left on the official page to avoid stale copies. Registration-system/payment inquiries should use the conference registration contacts; workshop inquiries go to Prof. Chen Sun.

The [IPerSense workshop](https://bassamlab.github.io/IPerSense/workshops/itsc_2026.html) and [OpenADS tutorial](https://openads-project.github.io/tutorial-itsc-26/) informed the section structure only. Their programme, funding, and sponsorship claims were not copied. The acknowledgements thank contributors and the conference organizing team without inventing grants or sponsors.

## Deployment

The repository includes `.nojekyll` and can be published directly from the repository root with GitHub Pages. The intended public URL is:

<https://sas-hku.github.io/ITSC2026/>

The hostname comes from the GitHub organization **SAS-HKU**, and `/ITSC2026/` comes from this repository's name. The page already uses that canonical URL and relative asset paths so it works under the project path.

### First publication

1. Commit and push the files to this repository's `master` branch.
2. Open <https://github.com/SAS-HKU/ITSC2026/settings/pages>.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Choose **master** and **/(root)**, then Save. Leave **Custom domain** blank.
5. Check the Pages deployment under **Actions**, then open the public URL above.

```powershell
git status
git diff --check
git add -A
git commit -m "Update workshop schedule, portraits, and conference imagery"
git push origin master
```

Run these from this repository folder. Review `git status` before staging; `git add -A` includes removed template files as well as newly added images. You need write access to the organization repository. Do not force-push if Git reports a conflict.

If the desired URL is exactly `https://sas-hku.github.io/` **without** `/ITSC2026/`, that requires an organization-site repository named `sas-hku.github.io`. Choosing `/(root)` above refers to the source folder, not the URL path. Do not rename or replace an existing organization homepage without coordinating with its owners.

Official guidance: [publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [site types](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## Attribution

This site was adapted from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which is licensed under CC BY-SA 4.0.

The five topic icons are from [Lucide](https://github.com/lucide-icons/lucide), distributed under the ISC license. The upstream license notice is retained in `static/icons/LICENSE-LUCIDE.txt`.
