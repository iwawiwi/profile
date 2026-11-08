import React from 'react';
import { Clock, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

/* 1. Start Event */
export const BpmnStartEvent: React.FC<{ label: string; sublabel?: string }> = ({ label, sublabel }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '85px' }}>
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '3.5px solid var(--gb-green)',
        background: 'var(--gb-green-soft)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--m3-shadow-1)',
      }}
    >
      <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: 'var(--gb-green)' }} />
    </div>
    <span style={{ fontSize: '0.88rem', fontWeight: 750, color: 'var(--gb-fg1)', marginTop: '8px', textAlign: 'center' }}>
      {label}
    </span>
    {sublabel && (
      <span style={{ fontSize: '0.78rem', color: 'var(--gb-fg4)', textAlign: 'center' }}>
        {sublabel}
      </span>
    )}
  </div>
);

/* 2. Task / Activity */
export interface BpmnTaskProps {
  actor: string;
  title: string;
  desc?: string;
  accent?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'orange';
}

export const BpmnTask: React.FC<BpmnTaskProps> = ({
  actor,
  title,
  desc,
  accent = 'blue',
}) => {
  const accentColor = `var(--gb-${accent})`;
  return (
    <div
      style={{
        minWidth: '175px',
        maxWidth: '225px',
        background: 'var(--md-sys-color-surface-container)',
        border: '1.5px solid var(--md-sys-color-outline-variant)',
        borderTop: `4.5px solid ${accentColor}`,
        borderRadius: '16px',
        padding: '12px 16px',
        boxShadow: 'var(--m3-shadow-1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}
    >
      <span
        style={{
          fontSize: '0.75rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: accentColor,
        }}
      >
        {actor}
      </span>
      <span
        style={{
          fontSize: '0.96rem',
          fontWeight: 700,
          color: 'var(--gb-fg0)',
          lineHeight: 1.3,
        }}
      >
        {title}
      </span>
      {desc && (
        <span style={{ fontSize: '0.82rem', color: 'var(--gb-fg3)', lineHeight: 1.4 }}>
          {desc}
        </span>
      )}
    </div>
  );
};

/* 3. Exclusive Gateway (Decision Diamond) */
export const BpmnGateway: React.FC<{ question: string }> = ({ question }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '120px' }}>
    <div
      style={{
        width: '52px',
        height: '52px',
        background: 'var(--gb-yellow-soft)',
        border: '3px solid var(--gb-yellow)',
        transform: 'rotate(45deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--m3-shadow-1)',
        margin: '8px 0',
      }}
    >
      <span
        style={{
          transform: 'rotate(-45deg)',
          fontSize: '1.3rem',
          fontWeight: 900,
          color: 'var(--gb-yellow)',
          lineHeight: 1,
        }}
      >
        ✕
      </span>
    </div>
    <span
      style={{
        fontSize: '0.86rem',
        fontWeight: 750,
        color: 'var(--gb-fg0)',
        textAlign: 'center',
        lineHeight: 1.3,
        marginTop: '8px',
      }}
    >
      {question}
    </span>
  </div>
);

/* 4. Intermediate Timer Event (Double Circle) */
export const BpmnTimer: React.FC<{ limit: string; note?: string }> = ({ limit, note }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '90px' }}>
    <div
      style={{
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        border: '2.5px solid var(--gb-orange)',
        padding: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gb-orange-soft)',
        boxShadow: 'var(--m3-shadow-1)',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '1.5px dashed var(--gb-orange)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Clock size={22} color="var(--gb-orange)" />
      </div>
    </div>
    <span
      style={{
        fontSize: '0.88rem',
        fontWeight: 800,
        color: 'var(--gb-orange)',
        marginTop: '8px',
        textAlign: 'center',
      }}
    >
      {limit}
    </span>
    {note && (
      <span style={{ fontSize: '0.76rem', color: 'var(--gb-fg4)', textAlign: 'center' }}>
        {note}
      </span>
    )}
  </div>
);

/* 5. End Event */
export const BpmnEndEvent: React.FC<{
  label: string;
  type: 'success' | 'danger' | 'warning';
  sublabel?: string;
}> = ({ label, type, sublabel }) => {
  const isSuccess = type === 'success';
  const color = isSuccess ? 'var(--gb-green)' : type === 'danger' ? 'var(--gb-red)' : 'var(--gb-yellow)';
  const bg = isSuccess
    ? 'var(--gb-green-soft)'
    : type === 'danger'
    ? 'var(--gb-red-soft)'
    : 'var(--gb-yellow-soft)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: `4.5px solid ${color}`,
          background: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--m3-shadow-1)',
        }}
      >
        {isSuccess ? (
          <CheckCircle2 size={26} color={color} />
        ) : (
          <XCircle size={26} color={color} />
        )}
      </div>
      <span
        style={{
          fontSize: '0.9rem',
          fontWeight: 800,
          color,
          marginTop: '8px',
          textAlign: 'center',
        }}
      >
        {label}
      </span>
      {sublabel && (
        <span style={{ fontSize: '0.78rem', color: 'var(--gb-fg4)', textAlign: 'center' }}>
          {sublabel}
        </span>
      )}
    </div>
  );
};

/* 6. Sequence Arrow with Optional Condition Label */
export const BpmnConnector: React.FC<{ label?: string; direction?: 'right' | 'down' }> = ({
  label,
  direction = 'right',
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 6px',
    }}
  >
    {label && (
      <span
        style={{
          fontSize: '0.78rem',
          fontWeight: 800,
          color: label.toLowerCase().includes('ya') || label.toLowerCase().includes('sah') || label.toLowerCase().includes('valid')
            ? 'var(--gb-green)'
            : 'var(--gb-red)',
          marginBottom: '4px',
          background: 'var(--md-sys-color-surface-container-high)',
          padding: '2px 8px',
          borderRadius: '8px',
          border: '1px solid var(--md-sys-color-outline-variant)',
        }}
      >
        {label}
      </span>
    )}
    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--gb-fg4)' }}>
      <div
        style={{
          width: direction === 'right' ? '32px' : '2px',
          height: direction === 'right' ? '2.5px' : '28px',
          background: 'var(--gb-fg4)',
        }}
      />
      <ArrowRight size={18} style={{ marginLeft: '-6px' }} />
    </div>
  </div>
);
