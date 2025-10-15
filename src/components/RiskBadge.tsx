import React from 'react';
import { RISK_BAND_COLORS } from '../lib/types';

interface RiskBadgeProps {
  riskBand: string;
}

const RiskBadge: React.FC<RiskBadgeProps> = ({ riskBand }) => {
  const color = RISK_BAND_COLORS[riskBand as keyof typeof RISK_BAND_COLORS] || '#6B7280';

  return (
    <span
      className="badge font-bold"
      style={{
        backgroundColor: `${color}20`,
        color: color,
        borderColor: color,
        borderWidth: '1px',
      }}
    >
      {riskBand}
    </span>
  );
};

export default RiskBadge;
