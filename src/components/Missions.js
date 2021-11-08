import React from 'react';

export default function Missions() {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th aria-label="empty space" />
          </tr>
        </thead>
      </table>
    </div>
  );
}
