
import EventCountdown from '@/components/sections/event-countdown/event-countdown';
import EventOverview from '@/components/sections/event-overview/event-overview';
import KeyMainTheme from '@/components/sections/key-main-theme/key-main-theme';

export default function Home() {
  return (
    <main>
      <EventCountdown />
      <EventOverview />
      <KeyMainTheme />
    </main>
  );
}
