

export class State {
    private _name: string = '';
    private _primaryBrandName: string = 'Wellcare by Allwell';
    private _secondaryBrandName: String = '';
    private _teriataryBrandName: String = '';

    private _primarySiteLink: String = '';
    private _secondarySiteLink: String = '';
    private _stateInfoLink: string = '';

    private _ihhaEligible: boolean = false;

    constructor(
        name?: string,
        primaryBrandName?: string,
        secondaryBrandName?: string,
        teriataryBrandName?: string,
        primarySiteLink?: string,
        secondarySiteLink?: string,
        stateInfoLink?: string,
        ihhaEligible?: boolean
    ) {
        if (name !== undefined) this._name = name;
        if (primaryBrandName !== undefined) this._primaryBrandName = primaryBrandName;
        if (secondaryBrandName !== undefined) this._secondaryBrandName = secondaryBrandName;
        if (teriataryBrandName !== undefined) this._teriataryBrandName = teriataryBrandName;
        if (primarySiteLink !== undefined) this._primarySiteLink = primarySiteLink;
        if (secondarySiteLink !== undefined) this._secondarySiteLink = secondarySiteLink;
        if (stateInfoLink !== undefined) this._stateInfoLink = stateInfoLink;
        if (ihhaEligible !== undefined) this._ihhaEligible = ihhaEligible;
    }

    get name(): string {
        return this._name;
    }

    get primaryBrandName(): string {
        return this._primaryBrandName;
    }

    get secondaryBrandName(): string {
        return this._secondaryBrandName;
    }

    get teriataryBrandName(): string {
        return this._teriataryBrandName;
    }

    get primarySiteLink(): string {
        return this._primarySiteLink;
    }

    get secondarySiteLink(): string {
        return this._secondarySiteLink;
    }

    get stateInfoLink(): string {
        return this._stateInfoLink;
    }

    get ihhaEligible(): boolean {
        return this._ihhaEligible;
    }
}


export const AvailableStates: State[] = [
    new State(
        "Select",
        "Wellcare By Allwell",
        "",
        "",
        "",
        "",
        "",
        false
    ),
    new State(
        "Alabama (AL)",
        "Wellcare by Allwell",
        "",
        "",
        "https://wellcarecomplete.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=74388#:~:text=%2D-,Alabama,-Plan%20website%3A",
        false
    ),
    new State(
        "Arizona (AZ)",
        "Wellcare by Allwell",
        "",
        "",
        "https://wellcare.azcompletehealth.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=74388#:~:text=%2D-,Arizona,-Plan%20Website%3A",
        false
    ),
    new State(
        "Arkansas (AR)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcare.arhealthwellness.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Arkansas,-Plan%20Website%3A",
        true
    ),
    new State(
        "California (CA)",
        "Wellcare By Health Net",
        "Health Net of California",
        "Wellcare CalViva Health",
        "https://wellcare.healthnetcalifornia.com/ ",
        "https://www.Healthnet.com",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,California,-Plan%20Website%3A",
        true
    ),
    new State(
        "Deleware (DE)",
        "Wellcare",
        "",
        "",
        "https://www.wellcare.com/de",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Delaware,-Plan%20Website%3A",
        true
    ),
    new State(
        "Florida (FL)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcarecomplete.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Florida,-Plan%20Website%3A",
        true
    ),
    new State(
        "Illinois (IL)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcarecomplete.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Illinois,-Plan%20Website%3A",
        true
    ),
    new State(
        "Indiana (IN)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcare.mhsindiana.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Indiana,-Plan%20Website%3A",
        true
    ),
    new State(
        "Kansas (KS)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcare.sunflowerhealthplan.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Kansas,-Plan%20Website%3A",
        true
    ),
    new State(
        "Michigan (MI)",
        "Wellcare By Allwell",
        "",
        "",
        "https://www.wellcarecomplete.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Michigan,-Plan%20Website%3A",
        true
    ),
    new State(
        "Missouri (MO)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcare.homestatehealth.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Missouri,-Plan%20Website%3A",
        true
    ),
    new State(
        "Nebraska (NE)",
        "Wellcare",
        "",
        "",
        "https://www.wellcarene.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Nevada,-Plan%20Website%3A",
        true
    ),
    new State(
        "Nevada (NV)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcare.silversummithealthplan.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Nevada,-Plan%20Website%3A",
        false
    ),
    new State(
        "New Mexico (NM)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcare.westernskycommunitycare.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,New%20Mexico,-Plan%20Website%3A",
        false
    ),
    new State(
        "Ohio (OH)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcare.buckeyehealthplan.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Ohio,-Plan%20Website%3A",
        true
    ),
    new State(
        "Oklahoma (OK)",
        "Wellcare",
        "",
        "",
        "https://www.wellcareok.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Oklahoma,-Plan%20Website%3A",
        true
    ),
    new State(
        "Oregon (OR)",
        "Wellcare By Health Net",
        "Wellcare By Trillium Advantage",
        "",
        "https://wellcare.healthnetoregon.com/",
        "https://wellcare.trilliumadvantage.com/",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=Oregon%20and%20Washington",
        true
    ),
    new State(
        "Pennsylvania (PA)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcare.pahealthwellness.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Pennsylvania,-Plan%20Website%3A",
        true
    ),
    new State(
        "Texas (TX)",
        "Wellcare by Allwell",
        "",
        "",
        "https://wellcare.superiorhealthplan.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Texas,-Plan%20Website%3A",
        true
    ),
    new State(
        "Washington (WA)",
        "Wellcare By Health Net",
        "",
        "",
        "https://wellcare.healthnetoregon.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=Oregon%20and%20Washington",
        true
    ),
    new State(
        "Wisconsin (WI)",
        "Wellcare By Allwell",
        "",
        "",
        "https://wellcare.mhswi.com/",
        "",
        "https://cenpointprd.ad.wellcare.com/articles/5c815a45-90f1-4f67-8b4b-7d52f92f3546?row=1&memory=46718#:~:text=%2D-,Wisconsin,-Plan%20Website%3A",
        true
    )
];