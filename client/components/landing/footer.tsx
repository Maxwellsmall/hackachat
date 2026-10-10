import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';

export const  LandingFooter: React.FC = () => {
    return (
        <footer className="border-t border-border bg-background py-10 text-left">
            <div className="mx-auto max-w-6xl ">
                <div className="flex flex-col sm:flex-row item-start sm:items-center justify-between gap-6 pb-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-[var(--radius)] bg-primary text-primary-foreground font-mono font-bold text-xs border border-primary">
                                H
                            </div>
                            <span className="font-display font-semibold text-sm text-foreground">
                                HackaChat
                            </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            A free, honest AI companion built by student in Hack culb's Third space.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium text-muted-forground">
                        <a
                        // href={SITE_COPY.brand.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                            <GitBranch className="h-3.5 w-3.5" />
                            <span>GitHub</span>
                        </a>
                        <a
                        // href={SITE_COPY.brand.thirdspaceUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                        <span>Third Space</span>
                        <ExternalLink className="h-3 w-3" />    
                        </a>
                        <a
                        // href={SITE_COPY.brand.hackclubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-1 hover:text-foreground transition-colors"
                        >
                            <span>Hack Club</span>
                            <ExternalLink className="h-3 w-3" />
                        </a>                
                    </div>
                </div>

                {/* <separator /> */}

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-muted-foreground font-mono">
                    <div>Made by high schoolers • Hack Club Thrid Space</div>
                    <div>Hack Club AI Proxy • IndexedDB storage • Open weights</div>
                </div>
            </div>
        </footer>
    );
};