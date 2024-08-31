/*
"hota.hero.campaign.cvc01": {
    "pres": {
        "bio": {
            "ts": {
                "en_US": "Bidley is one of the most successful pirates operating near Erathia shores. He is ready to accept any challenge and is able to emerge unscathed from any situation. It seems like he has a rival in every world's corner, but he is always able to escape the trouble. Apart from being an excellent warrior, having artisan skills in both pistol and sabre wielding, he also trains his crew personally."
            }
        },
        "name": { "ts": { "en_US": "Bidley" } }
    }
},
*/
export interface IHeroTranslationRecord {
    pres: {
        bio: {
            ts: {
                en_US: string;
            }
        }
        name: {
            ts: {
                en_US: string;
            }
        }
    };
}
