import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { TeamDetails } from '@/teams';

const TeamDetailPage = () => {
  const { query } = useRouter();
  const teamId = query.id;

  if (!teamId || typeof teamId !== 'string') {
    return null;
  }

  return (
    <motion.div animate={{ rotate: 360 }} transition={{ type: 'spring' }}>
      <TeamDetails teamId={teamId} />
    </motion.div>
  );
};

export default TeamDetailPage;
