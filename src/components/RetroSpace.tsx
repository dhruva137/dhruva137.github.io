export const RetroSpace = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1,
        backgroundColor: '#000',
        backgroundImage: 'url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=3000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay to balance contrast with space backdrop */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};
