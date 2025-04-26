
import EventCountdown from '@/components/sections/event-countdown/event-countdown';
import EventOverview from '@/components/sections/event-overview/event-overview';
import KeyMainTheme from '@/components/sections/key-main-theme/key-main-theme';
import EventBenefits from '@/components/sections/event-benefits/event-benefits';
import TargetAudience from '@/components/sections/target-audience/target-audience';
import Speakers from '@/components/sections/speakers/speakers';
import SponsorshipForm from '@/components/sections/sponsorship/sponsorship-form';
import SpeakingForm from '@/components/sections/speaking-opportunity/speaking-form';
import OurSponsors from '@/components/sections/our-sponsors/our-sponsors';
import RegistrationForm from '@/components/sections/registration-form/registration-form';

export default function Home() {
  return (
    <main>
      <EventCountdown />
      <EventOverview />
      <KeyMainTheme />
      <EventBenefits />
      <TargetAudience />
      <Speakers />
      <SponsorshipForm />
      <SpeakingForm />
      <OurSponsors />
      <RegistrationForm />
    </main>
  );
}
