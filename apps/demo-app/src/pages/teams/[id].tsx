import { useRouter } from 'next/router';
import { TeamDetails } from '@/teams';

const TeamDetailPage = () => {
  const { query } = useRouter();
  const teamId = query.id;

  if (!teamId || typeof teamId !== 'string') {
    return null;
  }

  return <TeamDetails teamId={teamId} />;
};

export default TeamDetailPage;
