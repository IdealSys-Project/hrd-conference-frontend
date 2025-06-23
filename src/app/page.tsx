import EventCountdown from '@/components/sections/event-countdown/event-countdown';
import EventOverview from '@/components/sections/event-overview/event-overview';
import KeyMainTheme from '@/components/sections/key-main-theme/key-main-theme';
import EventBenefits from '@/components/sections/event-benefits/event-benefits';
import TargetAudience from '@/components/sections/target-audience/target-audience';
import LaunchingCeremony from '@/components/sections/launching-ceremony/launching-ceremony';
import Speakers from '@/components/sections/speakers/speakers';
import SponsorshipForm from '@/components/sections/sponsorship/sponsorship-form';
import SpeakingForm from '@/components/sections/speaking-opportunity/speaking-form';
import OurSponsors from '@/components/sections/our-sponsors/our-sponsors';
import MediaPartners from '@/components/sections/media-partners/media-partners';
import EventSponsors from '@/components/sections/event-sponsors/event-sponsors';
import RegistrationForm from '@/components/sections/registration-form/registration-form';
import EventHighlights from '@/components/sections/event-highlights/event-highlights';
import Exhibitors from '@/components/sections/exhibitors/exhibitors';

export default function Home() {
  return (
    <main>
      <EventCountdown />
      <EventOverview />
      <KeyMainTheme />
      <EventBenefits />
      <TargetAudience />
      <LaunchingCeremony />
      <Speakers />
      <EventSponsors />
      <MediaPartners />
      <Exhibitors />
      <SponsorshipForm />
      <SpeakingForm />
      <OurSponsors />
      <RegistrationForm />
      <EventHighlights />
    </main>
  );
}
