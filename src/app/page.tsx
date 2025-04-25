
import EventCountdown from '@/components/sections/event-countdown/event-countdown';
import EventOverview from '@/components/sections/event-overview/event-overview';
import KeyMainTheme from '@/components/sections/key-main-theme/key-main-theme';
import EventBenefits from '@/components/sections/event-benefits/event-benefits';
import TargetAudience from '@/components/sections/target-audience/target-audience';
import Speakers from '@/components/sections/speakers/speakers';

export default function Home() {
  return (
    <main>
      <EventCountdown />
      <EventOverview />
      <KeyMainTheme />
      <EventBenefits />
      <TargetAudience />
      <Speakers />
    </main>
  );
}
