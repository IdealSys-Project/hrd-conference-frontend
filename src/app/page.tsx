
import EventCountdown from '@/components/sections/event-countdown/event-countdown';
import EventOverview from '@/components/sections/event-overview/event-overview';

export default function Home() {
  return (
    <main>
      <EventCountdown />
      <EventOverview />
    </main>
  );
}
