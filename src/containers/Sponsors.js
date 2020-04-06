import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import PaddingLayout from '../components/PaddingLayout';

const Sponsors = props => (
    <PaddingLayout>
        <Typography variant="h3" component="h2" style={styles.header}>Unsere Sponsoren</Typography>
        <Card style={styles.card}>
            <CardContent>
                <Typography paragraph={true}>
                    An dieser Stelle möchten wir all unseren Unterstützern herzlich danken.
                    Gemeinsam können wir den Kapamonitor stetig verbessern, um eine optimale Verwaltung der Kapazitäten verschiedenster
                    Einrichtungen zu bieten.
                </Typography>
                <Typography paragraph={true}>
                    Danke, dass Sie uns beim Kampf gegen das Coronavirus unterstützen!
                </Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent style={styles.container}>

                {renderedSponsors}
            </CardContent>
        </Card>
    </PaddingLayout>
);

const sponsors = [
    {logo: "/logo_kineoai.png", link: "http://www.kineo.ai"},
];

const styles = {
    header: {
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    logoImg: {
        width: 200,
        marginTop: 40,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    card: {
        marginBottom: 50,
    }
};

const renderedSponsors = sponsors.map(sponsor => {
    return(
        <a href={sponsor.link} target="_blank">
            <img src={sponsor.logo} style={styles.logoImg}/>
        </a>
    );
});

export default Sponsors;
