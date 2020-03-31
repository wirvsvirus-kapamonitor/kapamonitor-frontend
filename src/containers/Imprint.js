import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import PaddingLayout from '../components/PaddingLayout';

const Imprint = props => (
  <PaddingLayout>
    <Card>
      <CardContent>
        <Typography variant="h4" component="h2" style={styles.mainHeader}>Impressum</Typography>

        <Typography paragraph={true}>Informationspflicht laut § 5 TMG.</Typography>

        <Typography paragraph={true}>{contactData.name}</Typography>

        <Typography paragraph={true}>
          <Typography>{contactData.addrLine1},</Typography>
          <Typography>{contactData.addrLine2},</Typography>
          <Typography>Deutschland</Typography>
        </Typography>

        <Typography paragraph={true}>
          <Typography><span style={styles.bold}>Tel.: </span>{contactData.tel}</Typography>
          <Typography><span style={styles.bold}>E-Mail: </span><Link href={"mailto:" + contactData.mail}>{contactData.mail}</Link></Typography>
        </Typography>

        <Typography variant="h4" component="h2" style={styles.header}>Haftung für Inhalte dieser Website</Typography>
        <Typography paragraph={true}>
          Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen.
          Laut Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter für eigene Informationen, die wir zur Nutzung bereitstellen, nach den
          allgemeinen Gesetzen verantwortlich. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen,
          speziell für jene die seitens Dritter bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht verpflichtet,
          die von ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </Typography>
        <Typography paragraph={true}>
          Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt.
        </Typography>
        <Typography paragraph={true}>
          Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.
        </Typography>

        <Typography variant="h4" component="h2" style={styles.header}>Haftung für Links auf dieser Website</Typography>
        <Typography paragraph={true}>
          Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites
          besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher
          nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
        </Typography>
        <Typography paragraph={true}>
          Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
        </Typography>

        <Typography variant="h4" component="h2" style={styles.header}>Urheberrechtshinweis</Typography>
        <Typography paragraph={true}>
          Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der Bundesrepublik Deutschland.
          Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf
          anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer
          Seite rechtlich verfolgen.
        </Typography>
        <Typography paragraph={true}>
          Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
        </Typography>
      </CardContent>
    </Card>
  </PaddingLayout>
);

const styles = {
  bold: {
    fontWeight: "bold",
  },
  mainHeader: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
  },
};

const contactData = {
  name: "Max Mustermann",
  addrLine1: "Musterstraße 1",
  addrLine2: "12345 Musterhausen",
  tel: "01234/56789",
  mail: "office@musterfirma.de",
};

export default Imprint;
