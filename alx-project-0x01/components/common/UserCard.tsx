import React from 'react';

interface UserProps {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    role?: string;
    bio?: string;
    joinDate?: string;
}

interface UserCardProps {
    user: UserProps;
    onUserClick?: (userId: number) => void;
    showBio?: boolean;
    compact?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ 
    user, 
    onUserClick, 
    showBio = true, 
    compact = false 
}) => {
    const handleCardClick = () => {
        if (onUserClick) {
            onUserClick(user.id);
        }
    };

    return (
        <div 
            className={`user-card ${compact ? 'user-card--compact' : ''} ${onUserClick ? 'user-card--clickable' : ''}`}
            onClick={handleCardClick}
        >
            <div className="user-card__header">
                <div className="user-card__avatar">
                    {user.avatar ? (
                        <img src={user.avatar} alt={`${user.name}'s avatar`} />
                    ) : (
                        <div className="user-card__avatar-placeholder">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>
                <div className="user-card__info">
                    <h3 className="user-card__name">{user.name}</h3>
                    <p className="user-card__email">{user.email}</p>
                    {user.role && (
                        <span className="user-card__role">{user.role}</span>
                    )}
                </div>
            </div>
            
            {showBio && user.bio && !compact && (
                <div className="user-card__bio">
                    <p>{user.bio}</p>
                </div>
            )}
            
            {user.joinDate && !compact && (
                <div className="user-card__footer">
                    <span className="user-card__join-date">
                        Joined {new Date(user.joinDate).toLocaleDateString()}
                    </span>
                </div>
            )}
            
            <style jsx>{`
                .user-card {
                    background: white;
                    border-radius: 12px;
                    padding: 20px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e1e5e9;
                    transition: all 0.3s ease;
                    margin-bottom: 16px;
                }
                
                .user-card--clickable:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
                    cursor: pointer;
                }
                
                .user-card--compact {
                    padding: 12px;
                }
                
                .user-card__header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 16px;
                }
                
                .user-card--compact .user-card__header {
                    margin-bottom: 0;
                }
                
                .user-card__avatar {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                
                .user-card--compact .user-card__avatar {
                    width: 40px;
                    height: 40px;
                }
                
                .user-card__avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .user-card__avatar-placeholder {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    font-size: 24px;
                }
                
                .user-card--compact .user-card__avatar-placeholder {
                    font-size: 16px;
                }
                
                .user-card__info {
                    flex: 1;
                    min-width: 0;
                }
                
                .user-card__name {
                    margin: 0 0 4px 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #1a202c;
                }
                
                .user-card--compact .user-card__name {
                    font-size: 16px;
                }
                
                .user-card__email {
                    margin: 0 0 8px 0;
                    color: #718096;
                    font-size: 14px;
                }
                
                .user-card__role {
                    background: #edf2f7;
                    color: #4a5568;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 500;
                    text-transform: uppercase;
                }
                
                .user-card__bio {
                    margin-bottom: 16px;
                }
                
                .user-card__bio p {
                    margin: 0;
                    color: #4a5568;
                    line-height: 1.5;
                }
                
                .user-card__footer {
                    padding-top: 16px;
                    border-top: 1px solid #e2e8f0;
                }
                
                .user-card__join-date {
                    color: #a0aec0;
                    font-size: 12px;
                }
            `}</style>
        </div>
    );
};

export default UserCard;
